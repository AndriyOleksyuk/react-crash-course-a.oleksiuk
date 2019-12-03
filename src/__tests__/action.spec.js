import { setBtnSize, setBtnOutline } from '../actions/ThemeActions';

describe('actions', () => {
    it('should set btn size', () => {
        const action = setBtnSize('sm');
        expect(action).toMatchSnapshot();
    })

    it('should set outline', () => {
        const action = setBtnOutline('outline-');
        expect(action).toMatchSnapshot();
    })

    it('should set delete outline', () => {
        const action = setBtnOutline('');
        expect(action).toMatchSnapshot();
    })
})
