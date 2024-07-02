import React from 'react';

function Cv() {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <p className="text-2xl mb-4">CV ici</p>
            <div className="w-3/4 h-3/4">
                <iframe
                    src="/src/assets/cv.pdf"
                    title="CV"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
}

export default Cv;
