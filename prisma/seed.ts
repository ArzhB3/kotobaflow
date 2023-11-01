import { Prisma, PrismaClient } from '@prisma/client';
import { faker, fakerJA } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
	const users = [];
	const posts = [];
	const likes = [];

	for (let i = 0; i < 30; i++) {
		const user = {
			username: fakerJA.internet.userName(),
			name: fakerJA.person.firstName(),
			email: fakerJA.internet.email(),
			image: fakerJA.image.avatar(),
			bio: fakerJA.lorem.paragraph(),
			link: fakerJA.internet.url(),
		} satisfies Prisma.UserCreateInput;

		const userCreated = await prisma.user.create({ data: user });
		users.push(userCreated);
	}

	for (let i = 0; i < 100; i++) {
		const randomUserIndex = faker.number.int({
			min: 0,
			max: users.length - 1,
		});

		const randomWordCount = faker.number.int({
			min: 5,
			max: 30,
		});

		const post = {
			userId: users[randomUserIndex].id,
			content: faker.lorem.sentence(randomWordCount),
		} satisfies Prisma.PostUncheckedCreateInput;

		const postCreated = await prisma.post.create({ data: post });
		posts.push(postCreated);
	}

	for (let i = 0; i < 3000; i++) {
		const randomUserIndex = faker.number.int({
			min: 0,
			max: users.length - 1,
		});

		const randomPostIndex = faker.number.int({
			min: 0,
			max: posts.length - 1,
		});

		const like = {
			userId: users[randomUserIndex].id,
			postId: posts[randomPostIndex].id,
		} satisfies Prisma.LikeUncheckedCreateInput;

		const likeCreated = await prisma.like.create({ data: like });
		likes.push(likeCreated);
	}
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
