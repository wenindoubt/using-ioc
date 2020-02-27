import { AttributeMap, DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ResumeTypes, UpdateName, Cert } from '../repo/types/resume_types';
import bottle from '../bootstrap';

// export const getSingleItem = bottle.container.ResumeRepo.get(
//   'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
//   '#METADATA#fa948f7c-8ccf-40f6-b489-3e13de56c77a'
// ).then((item: AttributeMap) => {
//   console.log(item);
// });
//
// export const query = bottle.container.ResumeRepo.query('USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a').then(
//   (item: any) => {
//     console.log(item);
//   }
// );
//
// export const queryJobs = bottle.container.ResumeRepo.queryJobs(
//   'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
//   'JOB#'
// ).then((jobs: DocumentClient.ItemList) => {
//   jobs.forEach((job: DocumentClient.AttributeMap) => {
//     console.log(`My job is - ${job.SK}`);
//   });
// });
//
// export const queryCerts = bottle.container.ResumeRepo.queryCerts(
//   'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
//   'CERT#'
// ).then((jobs: DocumentClient.ItemList) => {
//   jobs.forEach((job: DocumentClient.AttributeMap) => {
//     console.log(`My cert is - ${job.SK}`);
//   });
// });

// const partialItem = {
//   pk: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
//   sk: '#METADATA#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
//   name: 'Boo'
// };
//
// export const put = bottle.container.ResumeRepo.updateName(
//   partialItem
// ).then((response: DocumentClient.UpdateItemOutput) => console.log('Updated the name'));

const devOpsProCert: Cert = {
  PK: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
  SK: 'CERT#eb206b11-a09f-41fb-8faa-f2bc305eb1ad',
  Data: 'CERT#DevOps Engineer Professional',
  fromDate: 1575792000000,
  toDate: 1670486400000,
  validation: '8AFGPW4UOHERA2YN'
};

export const putDevOpsEngineerPro = bottle.container.ResumeRepo.putCert(devOpsProCert).then(
  (response: DocumentClient.PutItemOutput) => {
    console.log('Saved devops engineer pro');
  }
);

const solutionsArchitectPro: Cert = {
  PK: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
  SK: 'CERT#34d25d7e-0a76-40c8-ab8e-0962c9ec0148',
  Data: 'CERT#Solutions Architect Professional',
  fromDate: 1545379200000,
  toDate: 1671609600000,
  validation: '3RGNDX37UGAQZ4VC'
};

export const putSolutionsArchitectPro = bottle.container.ResumeRepo.putCert(solutionsArchitectPro).then(
  (response: DocumentClient.PutItemOutput) => {
    console.log('Saved solutions architect pro');
  }
);
