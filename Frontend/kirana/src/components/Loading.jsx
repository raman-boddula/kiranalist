import { Load } from './LoadingStyle';

const Loader = () => {
    return (
        <Load>
            <span>&#123;</span>
            <span style={{fontSize:"0.5em"}}>Loading...</span>
            <span>&#125;</span>
        </Load>
    );
};

export { Loader };