import { useEffect, useState } from 'react';
import './TitlePerfil.css';

function TitlePerfil() {
    const titles: string[] = ['Frontend Developer', 'Apps Developer', 'UI UX Designer'];
    const [currentTitle, setCurrentTitle] = useState(0); 
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); 
            setTimeout(() => {
                setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length); 
                setIsVisible(true); // Muestra el nuevo título
            }, 400); 
        }, 2600); 

        return () => clearInterval(interval); 
    }, [titles.length]);

    return (
        <div className="flex justify-start">
            <span className={`text-2xl font-semibold title-perfil-fade ${isVisible ? 'show' : ''}`}>
                {titles[currentTitle]}
            </span>
        </div>
    );
}

export default TitlePerfil;
