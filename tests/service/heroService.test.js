const HeroService = require('../../service/heroService')
const HeroRepository = require('../../repository/heroRepository')
const { models } = require('../../models/hero/db')

jest.mock('../../repository/heroRepository')

describe('heroService', () => {
    let heroService;
    let heroRepository;

    beforeEach(() => {
        heroRepository = new HeroRepository(models.Heroes, models.Profile)
        heroService = new HeroService(heroRepository)
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('getAllHero', async () => {
        // 模拟 heroRepository.findAll 的返回值
        heroRepository.findAll.mockResolvedValue([
            { id: 1, name: 'Hero 1' },
            { id: 2, name: 'Hero 2' },
        ]);

        const heroes = await heroService.getAllHeroes();

        expect(heroRepository.findAll).toHaveBeenCalledTimes(1);
        expect(heroes).toEqual([
            { id: 1, name: 'Hero 1' },
            { id: 2, name: 'Hero 2' },
        ]);
    });
})