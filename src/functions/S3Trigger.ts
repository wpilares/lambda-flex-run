import {S3Event} from "aws-lambda";

export const S3Trigger = async (event: S3Event) => {
    console.log('Evento S3 recibido:', JSON.stringify(event));
}