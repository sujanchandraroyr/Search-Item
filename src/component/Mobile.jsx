

const Mobile = ({mobile}) => {
    
    return (
        <div>
           <p className="text-3xl font-bold">{mobile.brand}</p>
           <p>{mobile.model}</p>
        </div>
    );
};

export default Mobile;