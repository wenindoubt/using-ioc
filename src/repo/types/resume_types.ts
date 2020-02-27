import { DynamoTypes } from './dynamo-types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export interface ResumeTypes extends DynamoTypes {
  putCert(item: Cert): Promise<DocumentClient.PutItemOutput>;
  queryJobs(pk: string, sk: string): Promise<DocumentClient.ItemList>;
  queryCerts(pk: string, sk: string): Promise<DocumentClient.ItemList>;
  updateName(partialItem: UpdateName): Promise<DocumentClient.UpdateItemOutput>;
}

export interface Cert {
  PK: string;
  SK: string;
  Data: string;
  fromDate: number;
  toDate: number;
  validation: string;
}

export interface UpdateName {
  PK: string;
  SK: string;
  name: string;
}
