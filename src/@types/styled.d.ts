// arquivo d.ts = arquivo totalmente em typescript
// arquivo de definição de tipos
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme; // guardando o valor inferido de formar automática pelo typescript de propriedades dentro do tema defaultTheme

declare module 'styled-components'{ // sobrescrevendo os tipos de defaultTheme
    export interface DefaultTheme extends ThemeType {}
}