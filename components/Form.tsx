'use client';
import React, { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    city: string;
    state: string;
};

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        city: '',
        state: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="px-8 my-20">
            <h1 className="max-w-xl text-4xl font-semibold leading-normal text-gray-900">
                Register{' '}
            </h1>
            <form
                onSubmit={handleSubmit}
                className=" px-10 mx-auto p-6 space-y-4 bg-zinc border border-zinc rounded-lg shadow-sm"
            >
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-900"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="johndoe@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-900"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="New York"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-900"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="NY"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-40  px-6 py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
