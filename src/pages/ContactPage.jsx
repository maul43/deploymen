import React from 'react';
import MainLayout from '../templates/MainLayout';

const ContactPage = () => {
    return (
        <MainLayout>
            <div className="bg-whit">
                {/* Section Contact */}
                <section className="py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden p-8 md:flex">

                        {/* Contact Information */}
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hubungi Saya</h2>
                            <p className="text-gray-600 mb-4">Jika Anda memiliki pertanyaan atau ingin berdiskusi tentang proyek, silakan hubungi saya melalui form atau informasi di bawah ini:</p>
                            <ul>
                                <li className="flex items-center mb-4">
                                    <span className="inline-block w-6 h-6 mr-3 text-blue-500">
                                        📧
                                    </span>
                                    <span className="text-gray-600">Email: example@email.com</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <span className="inline-block w-6 h-6 mr-3 text-blue-500">
                                        📞
                                    </span>
                                    <span className="text-gray-600">Telepon: +62 812 3456 7890</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <span className="inline-block w-6 h-6 mr-3 text-blue-500">
                                        📍
                                    </span>
                                    <span className="text-gray-600">Alamat: Jakarta, Indonesia</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    )
}

export default ContactPage;