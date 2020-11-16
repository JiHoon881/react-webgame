const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [First, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [Second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [Value, setValue] = useState('');
    const [Result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(Value) === First * Second) {
            setResult('정답 : ' + Value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };
    
    return (
        <>
            <div>{First} 곱하기 {Second} 는 ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={Value} />
                <button>입력</button>
            </form>
            <div id="result">{Result}</div>
        </>
    );
};

module.exports = GuGuDan;