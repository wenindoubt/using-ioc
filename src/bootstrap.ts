import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import Bottle from 'bottlejs';
import { ResumeRepo } from './repo/lib/ResumeRepo';

Bottle.config = { strict: true }; // this method will throw an error if an injected dependency is undefined
const bottle = new Bottle();

bottle.constant('DDB_OPTIONS', { region: 'us-west-2', convertEmptyValues: true });
bottle.constant('RESUME_TABLE', 'Resume');
bottle.service<DocumentClient>('DDB', DocumentClient, 'DDB_OPTIONS');

bottle.service('ResumeRepo', ResumeRepo, 'DDB', 'RESUME_TABLE');

export default bottle;
