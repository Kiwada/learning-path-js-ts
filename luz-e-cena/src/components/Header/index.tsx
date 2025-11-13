import Logo from '../Logo/Index'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'
import HeaderLinks from './components/HeaderLinks'
import HeaderFormFilters from './components/HeaderFormFilters'
import HeaderActions from './components/HeaderActions'


const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='logo.png' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>
        </header>
    )
}

export default Header