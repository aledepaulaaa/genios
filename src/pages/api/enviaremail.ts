import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, nome, telefone, tipoProjeto } = req.body

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS,
            },
        })

        try {
            const enviarEmail = {
                from: "contato@geniosacademicos.com.br",
                to: "contato@geniosacademicos.com.br",
                subject: `Novo Contato de ${nome}`,
                text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nTipo de Projeto: ${tipoProjeto}`,
            }

            const info = await transporter.sendMail(enviarEmail)
            res.status(200).json({ success: true })
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error)
            res.status(500).json({ success: false })
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' })
    }
}
