import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import ambilProjek from '../services/projek.service';

const ProjectPage = () => {
    const [daftarProjek, setDaftarProjek] = useState([]);

    useEffect(() => {
        const ambilDataProjek = async () => {
            const data = await ambilProjek();
            setDaftarProjek(data);
        };
        ambilDataProjek();
    }, []);

    return (
        <MainLayout>
            <div className="bg-white">
                <section className="py-12 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800">Projek Saya</h2>
                            <p className="text-gray-500 mt-2">Berikut adalah beberapa projek yang telah saya kerjakan</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {daftarProjek.map((projek, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img src={projek.image_url} alt={projek.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">{projek.title}</h3>
                                        <p className="text-gray-600 mt-2">{projek.description}</p>
                                        <a href={projek.project_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
                                            Lihat Detail →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default ProjectPage;