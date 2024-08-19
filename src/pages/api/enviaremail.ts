import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, nome, telefone, tipoProjeto } = req.body

        console.log("Dados do email recebidos no backend:", { email, nome, telefone, tipoProjeto })

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email", // Host do servidor Titan
            port: 465, // Porta segura para SSL/TLS
            secure: true, // Habilita SSL/TLS
            auth: {
                user: process.env.USER_EMAIL, // Seu e-mail no Titan
                pass: process.env.USER_PASS, // A senha do seu e-mail
            },
        })

        try {
            const enviarEmail = {
                from: "contato@geniosacademicos.com.br",
                to: "contato@geniosacademicos.com.br", // Email fornecido pelo usuário
                subject: `Novo Contato de ${nome}`,
                text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nTipo de Projeto: ${tipoProjeto}`,
            }

            console.log("Enviando email para:", enviarEmail.to)

            const info = await transporter.sendMail(enviarEmail)
            console.log("Email enviado: %s", info.messageId)
            res.status(200).json({ success: true })
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error)
            res.status(500).json({ success: false })
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' })
    }
}
