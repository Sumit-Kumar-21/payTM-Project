function InputBox({ label, placeholder, onChange }) {
    return <div className="flex flex-col gap-2">
        <label htmlFor={label.split(' ')[0]} className="text-sm font-bold text-black">{label}</label>
        <input type="text" id={label.split(' ')[0]} onChange={onChange} placeholder={placeholder} className="border-gray-200 border-2 h-10 w-full rounded-md pl-2"/>
    </div>;
}

export default InputBox;