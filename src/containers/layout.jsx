import React from 'react';

const Layout = ({children}) => {
    return (
<main className="grid grid-cols-12 mobile-mt">
{children}
</main>
    )
}

export default Layout;