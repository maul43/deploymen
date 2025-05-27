// pages/HomePage.js
import React from 'react';
import MainLayout from '../templates/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <div class="bg-whit flex items-center justify-center min-h-screen">
                <div class="bg-gray-100 max-w-4xl shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    <div class="md:w-1/2">
                        <img src="src/assets/WhatsApp Image 2024-11-25 at 15.35.41.jpeg" alt="Profile Photo" class="w-full h-full object-cover" />
                    </div>

                    <div class="md:w-1/2 p-8">
                        <p class="text-gray-400 text-sm uppercase mb-2">Hello Everybody, I am</p>
                        <h1 class="text-4xl font-bold text-gray-800 mb-2">Maulana Dainuri</h1>
                        <h2 class="text-sm font-semibold text-gray-600 mb-4">Web Developer | UI/UX Designer</h2>
                        <h3 class="text-2xl font-bold text-gray-800">ABOUT ME</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            Web Developer with a proven track record in building dynamic web applications using Laravel, Node.js, and React.js. Skilled in designing, developing, and deploying end-to-end solutions, from backend to frontend. Proficient in database management, API development, and responsive UI/UX.
                        </p>

                        <ul class="space-y-3 text-gray-600 text-sm">
                            <li class="flex items-center">
                                <span class="mr-2 text-gray-400">
                                    <i class="fas fa-calendar-alt"></i>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
                                <span class="ml-2">{new Date().toLocaleDateString('id-ID')}</span>
                            </li>
                            <li class="flex items-center">
                                <span class="mr-2 text-gray-400">
                                    <i class="fas fa-phone-alt"></i>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                <span class="ml-2">+62 822 348 2433</span>
                            </li>
                            <li class="flex items-center">
                                <span class="mr-2 text-gray-400">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                <span class="ml-2">maulana12@gmail.com</span>
                            </li>
                            <li class="flex items-center">
                                <span class="mr-2 text-gray-400">
                                    <i class="fas fa-map-marker-alt"></i>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                                <span class="ml-2">University of Blitar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;