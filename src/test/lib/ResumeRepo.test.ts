import bottle from '../../bootstrap';

/**
 * @remarks
 * Jest cannot use import statement outside a module (fails to import bottle)
 */
test('get an item', async () => {
  // GIVEN
  const pk = 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a';
  const sk = '#METADATA#fa948f7c-8ccf-40f6-b489-3e13de56c77a';

  // WHEN
  const resumeRepo = await bottle.container.ResumeRepo.get(pk, sk); // actually calling service; need to mock
  console.log(resumeRepo);

  // THEN
  expect(resumeRepo).toMatchObject({
    Zip: 92618,
    City: 'Irvine',
    Address1: '1285 Spectrum',
    Address2: null,
    Data: 'USER#Jeffrey Wen',
    CellNumber: '5188672011',
    SK: '#METADATA#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
    PK: 'USER#fa948f7c-8ccf-40f6-b489-3e13de56c77a',
    State: 'CA',
    Email: 'jeffrey@wenindoubt.com',
    Name: 'Jeffrey Wen'
  });
});
