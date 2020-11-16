const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [Word, setWord] = useState('기차');
    const [Value, setValue] = useState('');
    const [Result, setResult] = useState('');
    const InputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(Word[Word.length - 1] === Value[0]) {
            setResult('딩동댕');
            setWord(Value);
            setValue('');
            InputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            InputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{Word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={InputRef} value={Value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>{Result}</div>
        </>
    );
};

module.exports = WordRelay;