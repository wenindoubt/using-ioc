import { AttributeMap, DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ResumeTypes, UpdateName, Cert } from '../types/resume_types';

export class ResumeRepo implements ResumeTypes {
  constructor(private ddb: DocumentClient, private table: string) {}

  public async get(pk: string, sk: string): Promise<DocumentClient.AttributeMap> {
    const params: DocumentClient.GetItemInput = {
      TableName: this.table,
      Key: {
        PK: pk,
        SK: sk
      }
    };

    const response: DocumentClient.GetItemOutput = await this.ddb.get(params).promise();
    return response.Item as AttributeMap;
  }

  public async putCert(item: Cert): Promise<DocumentClient.PutItemOutput> {
    const params: DocumentClient.PutItemInput = {
      TableName: this.table,
      Item: item
    };

    return (await this.ddb.put(params).promise()) as DocumentClient.PutItemOutput;
  }

  public async queryAll(pk: string): Promise<DocumentClient.ItemList> {
    const params: DocumentClient.QueryInput = {
      TableName: this.table,
      KeyConditionExpression: '#pk = :pk',
      ExpressionAttributeNames: {
        '#pk': 'PK'
      },
      ExpressionAttributeValues: {
        ':pk': pk
      }
    };

    const response: DocumentClient.QueryOutput = await this.ddb.query(params).promise();
    return response.Items as DocumentClient.ItemList;
  }

  public async queryJobs(pk: string, sk: string): Promise<DocumentClient.ItemList> {
    const params: DocumentClient.QueryInput = {
      TableName: this.table,
      KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'PK',
        '#sk': 'SK'
      },
      ExpressionAttributeValues: {
        ':pk': pk,
        ':sk': sk
      }
    };

    const response: DocumentClient.QueryOutput = await this.ddb.query(params).promise();
    return response.Items as DocumentClient.ItemList;
  }

  public async queryCerts(pk: string, sk: string): Promise<DocumentClient.ItemList> {
    const params: DocumentClient.QueryInput = {
      TableName: this.table,
      KeyConditionExpression: '#pk = :pk and begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'PK',
        '#sk': 'SK'
      },
      ExpressionAttributeValues: {
        ':pk': pk,
        ':sk': sk
      }
    };

    const response: DocumentClient.QueryOutput = await this.ddb.query(params).promise();
    return response.Items as DocumentClient.ItemList;
  }

  public async updateName(partialItem: UpdateName): Promise<DocumentClient.UpdateItemOutput> {
    const params: DocumentClient.UpdateItemInput = {
      TableName: this.table,
      Key: {
        PK: partialItem.PK,
        SK: partialItem.SK
      },
      UpdateExpression: 'set #name = :name',
      ExpressionAttributeNames: {
        '#name': 'Name'
      },
      ExpressionAttributeValues: {
        ':name': partialItem.name
      }
    };

    return (await this.ddb.update(params).promise()) as DocumentClient.PutItemOutput;
  }
}
