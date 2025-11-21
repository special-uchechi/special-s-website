import React from 'react'

function Advertisment() {
    return (
        <>
            <section className='px-6 pt-10 container mx-auto bg-gray-100'>
                <div>
                    <h1 className='text-3xl font-bold text-red-900 ml-16'>Advertisment</h1>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12">

                    {/* Left big box */}
                    <div className="lg:col-span-2 h-[400px] bg-gray-200 rounded-xl" />

                    {/* Right side → nested grid */}
                    <div className="grid grid-rows-2 gap-4">

                        {/* top box */}
                        <div className="bg-gray-300 rounded-xl" />

                        {/* bottom 2 boxes side-by-side */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-300 rounded-xl " />
                            <div className="bg-gray-300 rounded-xl" />
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Advertisment