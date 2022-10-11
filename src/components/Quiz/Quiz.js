import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;

    return (
        <div>
            <div className="card bg-slate-300 mx-auto w-4/6 shadow-xl m-5">
                <div className="card-body bg-[#61DAFB]">
                    <h2 className="text-xl font-semibold p-5">Quiz: {question}</h2>
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    <form className='lg:grid grid-cols-2 lg:gap-2 text-xl p-5'>
                        {
                            options.map(option => <Option
                                key={option}
                                option={option}
                            ></Option>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quiz;