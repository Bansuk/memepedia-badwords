import * as memeService from '../src/services/memeService.js';
import * as memeRepository from '../src/repository/memeRepository.js';

describe('Meme Service', () => {
  test("Shouldn't return memes for limit = 0", async () => {
    const limit = 0;
    const result = await memeService.listMemes(limit);
    expect(result.data.length).toBe(0);
  });

  test("Shouldn't return memes for limit = -1", async () => {
    const limit = -1;
    const result = await memeService.listMemes(limit);
    expect(result.data.length).toBe(0);
  });

  test("Shouldn't return memes for limit = 1", async () => {
    jest.spyOn(memeRepository, 'listMemes').mockImplementationOnce(() => []);
    const limit = 1;
    const result = await memeService.listMemes(limit);
    expect(result.data.length).toBe(0);
  });

  test("Shouldn't return memes for limit = undefined", async () => {
    jest.spyOn(memeRepository, 'listMemes').mockImplementationOnce(() => []);
    const limit = undefined;
    const result = await memeService.listMemes(limit);
    expect(result.data.length).toBe(0);
  });

  test('Should return memes for limit = 1', async () => {
    jest
      .spyOn(memeRepository, 'listMemes')
      .mockImplementationOnce(() => [{ id: 1, text: 'test', url: 'test' }]);
    const limit = 1;
    const result = await memeService.listMemes(limit);
    expect(result.data.length).toBe(1);
  });
});
