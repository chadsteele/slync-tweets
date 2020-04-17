import Api from './Api';

test('Api', async () => {
    expect.assertions(1);
    var data = null;
    await Api.fetch().then(response => {
        data = response;
    });
    await expect(data?.length || -1).toBeGreaterThan(3);
});

test('Api fail', async () => {
    await expect(Api.fetch('*', 20, 'bad url')).rejects.toThrow();
});