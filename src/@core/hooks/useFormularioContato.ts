import React from "react"
import { FORMULARIO_CONTATO, IFormularioContato } from "@/interfaces/IFormularioContato"

export default function useFormularioContato() {
    const [emaildata, setEmailData] = React.useState<IFormularioContato>(FORMULARIO_CONTATO)
    const [success, setSuccess] = React.useState<boolean>(false)
    const [error, setError] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleSendEmail = async () => {
        setLoading(true)
        try {

            if (success) {
                setSuccess(true)
            } else {
                setError(true)
            }

        } catch (error) {
            setError(true)
            console.error("Erro ao enviar e-mail, tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return {
        emaildata,
        success,
        error,
        loading,
        setEmailData,
        handleSendEmail
    }
}