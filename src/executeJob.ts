import {EventBridgeEvent, S3Event, ScheduledEvent} from "aws-lambda";
import {S3Trigger} from "./functions/S3Trigger";
import {ScheduleTrigger} from "./functions/ScheduleTrigger";


export const executeJob = async (event: any)  => {
    if (event.Records) {
        await S3Trigger(event as S3Event);
    } else if (event.source === 'aws.events' && event.resources && event.resources[0].startsWith('arn:aws:events')) {
        await ScheduleTrigger(event as ScheduledEvent);
    } else {
        throw new Error('Evento no reconocido');
    }
};

