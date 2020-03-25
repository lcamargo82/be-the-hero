import React from 'react';

//o retorno do html pode ser return <div>...</div> caso seja somente uma linha ou return (<div>...</div>) para mais linhas

//para receber os valores de dentro das tags, usa-se props.children

//primeiro exemplo, abaixo, de como receber valores atraves das propriedades
// export default function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );    
// }

//segundo exemplo, abaixo, de como receber valores atraves das propriedades
//fazendom uma destruturacao, definindo qual propriedade ira receber
export default function Header({ children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );    
}


//a exportacao podes ser...
//export default Header;
// ou conforme acima, direto na funcao