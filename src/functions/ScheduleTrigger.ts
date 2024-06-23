import {ScheduledEvent} from "aws-lambda";

export const ScheduleTrigger = async (event: ScheduledEvent) => {
    console.log('Evento de EventBridge recibido:', JSON.stringify(event));
}