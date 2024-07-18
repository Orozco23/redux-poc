import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import Form from './components/Form';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

function Base() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form />} />
                    <Route path='/form2' element={<Form2 />} />
                    <Route path='/form3' element={<Form3 />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Base;