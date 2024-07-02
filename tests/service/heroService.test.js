const HeroService = require('../../service/heroService')
const HeroRepository = require('../../repository/heroRepository')
const { models } = require('../../models/hero/db')
const { ValidationError } = require('../../config/errors.config')

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
        // mock repository
        heroRepository.findAllHero.mockResolvedValue([
            { id: 1, name: 'Hero 1', image: 'https://strorage/path/1', deleted: 0, createdAt: "2024-07-04 00:00:00", updatedAt: "2024-07-04 00:00:01", deletedAt: null },
            { id: 2, name: 'Hero 2', image: 'https://strorage/path/2', deleted: 0, createdAt: "2024-07-04 00:00:00", updatedAt: "2024-07-04 00:00:01", deletedAt: null },
        ]);

        heroRepository.findAllHeroWithProfile.mockResolvedValue([
            {
                id: 1,
                name: 'Hero 1',
                image: 'https://strorage/path/1',
                deleted: 0,
                createdAt: "2024-07-04 00:00:00",
                updatedAt: "2024-07-04 00:00:01",
                deletedAt: null,
                Profile: {
                    id: 1,
                    heroesId: 1,
                    strength: 1,
                    intelligence: 1,
                    agile: 1,
                    luck: 1,
                    createdAt: "2024-07-04 00:00:00",
                    updatedAt: "2024-07-04 00:00:01",
                    deletedAt: null,
                    deleted: 0
                }
            },
            {
                id: 2,
                name: 'Hero 2',
                image: 'https://strorage/path/2',
                deleted: 0,
                createdAt: "2024-07-04 00:00:00",
                updatedAt: "2024-07-04 00:00:01",
                deletedAt: null,
                Profile: {
                    id: 2,
                    heroesId: 2,
                    strength: 1,
                    intelligence: 1,
                    agile: 1,
                    luck: 1,
                    createdAt: "2024-07-04 00:00:00",
                    updatedAt: "2024-07-04 00:00:01",
                    deletedAt: null,
                    deleted: 0
                }
            }
        ]);

        const heroes = await heroService.getAllHero(false);
        expect(heroRepository.findAllHero).toHaveBeenCalledTimes(1);
        expect(heroes).toEqual([
            { id: "1", name: 'Hero 1', image: "https://strorage/path/1" },
            { id: "2", name: 'Hero 2', image: "https://strorage/path/2" },
        ]);

        const heroesWithProfile = await heroService.getAllHero(true);
        expect(heroRepository.findAllHeroWithProfile).toHaveBeenCalledTimes(1);
        expect(heroesWithProfile).toEqual([
            {
                id: "1",
                name: 'Hero 1',
                image: 'https://strorage/path/1',
                profile: {
                    str: 1,
                    int: 1,
                    agi: 1,
                    luk: 1,
                }
            },
            {
                id: "2",
                name: 'Hero 2',
                image: 'https://strorage/path/2',
                profile: {
                    str: 1,
                    int: 1,
                    agi: 1,
                    luk: 1,
                }
            }
        ]);
    });

    test('getSingleHero', async () => {
        // 測試是否檢查參數為number
        await expect(heroService.getSingleHero("abc", false)).rejects.toThrow(ValidationError)
        

        // mock repository
        heroRepository.findById.mockResolvedValue(
            {
                id: 1,
                name: 'Hero 1',
                image: 'https://strorage/path/1',
                deleted: 0,
                createdAt: "2024-07-04 00:00:00",
                updatedAt: "2024-07-04 00:00:01",
                deletedAt: null,
            },
        )

        heroRepository.findByIdWithProfile.mockResolvedValue(
            {
                id: 1,
                name: 'Hero 1',
                image: 'https://strorage/path/1',
                deleted: 0,
                createdAt: "2024-07-04 00:00:00",
                updatedAt: "2024-07-04 00:00:01",
                deletedAt: null,
                Profile: {
                    id: 1,
                    heroesId: 1,
                    strength: 1,
                    intelligence: 1,
                    agile: 1,
                    luck: 1,
                    createdAt: "2024-07-04 00:00:00",
                    updatedAt: "2024-07-04 00:00:01",
                    deletedAt: null,
                    deleted: 0
                }
            },
        )

        const hero = await heroService.getSingleHero(1, false);
        expect(heroRepository.findById).toHaveBeenCalledTimes(1);
        expect(hero).toEqual({
            id: "1",
            name: 'Hero 1',
            image: 'https://strorage/path/1',
        });

        const heroWithProfile = await heroService.getSingleHero(1, true);
        expect(heroRepository.findByIdWithProfile).toHaveBeenCalledTimes(1);
        expect(heroWithProfile).toEqual({
            id: "1",
            name: 'Hero 1',
            image: 'https://strorage/path/1',
            profile: {
                str: 1,
                int: 1,
                agi: 1,
                luk: 1,
            }
        });
    })
})
