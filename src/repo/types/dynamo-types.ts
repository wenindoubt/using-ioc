import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export interface DynamoTypes {
  get(pk: string, sk: string): Promise<DocumentClient.AttributeMap>;
  queryAll(pk: string, sk: string): Promise<DocumentClient.ItemList>;
}
