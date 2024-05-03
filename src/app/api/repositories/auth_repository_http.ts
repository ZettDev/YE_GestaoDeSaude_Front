import { AxiosError, AxiosResponse } from "axios";

import { api } from "../http";

export interface FormDataProps {
    name: string;
    email: string;
    phone: string;
    password: string;
    cpf: string;
}

export class AuthRepositoryHttp {
    async doLogin(email: string, password: string) {
        try {
            if (!email || !password) {
                return {
                    status: 422,
                    message: "Preencha todos os campos",
                    token: "Token inválida "
                };
            }
            const result: AxiosResponse = await api.post("/auth", {
                email,
                password
            });
            console.log(result.data);
            return {
                status: result.status,
                token: result.data.token
            };
        } catch (error: AxiosError | any) {
            return error;
        }
    }

    async registerClient(data: object) {
        try {
            const response: AxiosResponse = await api.post("/client", data);
            // console.log("Response OK: " + response);
            return response;
        } catch (error: AxiosError | any) {
            // console.log("Response 1: " + error);
            return error.response;
        }
    }
}