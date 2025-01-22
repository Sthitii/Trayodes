// scripts/create-admin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    try {
        const email = 'admin@trayodes.com';
        const password = 'admin123';

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.upsert({
            where: { email },
            update: {
                passwordHash: hashedPassword,
                role: 'ADMIN'
            },
            create: {
                email,
                passwordHash: hashedPassword,
                role: 'ADMIN',
                name: 'Admin User'
            }
        });

        console.log('Admin user created:', user);
    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();