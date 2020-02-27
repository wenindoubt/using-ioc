"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_1 = __importDefault(require("../bootstrap"));
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
var devOpsProCert = {
    PK: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
    SK: 'CERT#eb206b11-a09f-41fb-8faa-f2bc305eb1ad',
    Data: 'CERT#DevOps Engineer Professional',
    fromDate: 1575792000000,
    toDate: 1670486400000,
    validation: '8AFGPW4UOHERA2YN'
};
exports.putDevOpsEngineerPro = bootstrap_1.default.container.ResumeRepo.putCert(devOpsProCert).then(function (response) {
    console.log('Saved devops engineer pro');
});
var solutionsArchitectPro = {
    PK: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
    SK: 'CERT#34d25d7e-0a76-40c8-ab8e-0962c9ec0148',
    Data: 'CERT#Solutions Architect Professional',
    fromDate: 1545379200000,
    toDate: 1671609600000,
    validation: '3RGNDX37UGAQZ4VC'
};
exports.putSolutionsArchitectPro = bootstrap_1.default.container.ResumeRepo.putCert(solutionsArchitectPro).then(function (response) {
    console.log('Saved solutions architect pro');
});
//# sourceMappingURL=resume_handler.js.map