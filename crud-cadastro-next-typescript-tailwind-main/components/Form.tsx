import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    clientChange?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    isReadOlny
                    text="Código"
                    value={id} 
                    className="mb-4"
                />
            ) : false}
            <Input
                text="Nome"
                type="text"
                value={name}
                onChangeValue={setName} 
                className="mb-4"
            />
            <Input
                text="Idade"
                type="number"
                value={age} 
                onChangeValue={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button 
                    onClick={() => props.clientChange?.(new Client(name, +age, id))}
                    className="bg-gradient-to-r from-blue-400 to-blue-700 mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button 
                    onClick={props.canceled}
                    className="bg-gradient-to-r from-gray-400 to-gray-700">
                    Cancelar
                </Button>
            </div>
        </div>
    )
}