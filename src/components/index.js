/**
 * ARCHIVO DE "BARRIL"
 *
 * Su funcion es que cuando alguien haga una
 * referencia a la carpeta components al momento
 * de querer hacer una importacion, ya no seria
 * necesario tambien poner el nombre del modulo
 * siguiente, por ejempo, antes se importarian
 * varios componentes de esta manera:
 *
 * import { GifItem } from './components/GifItem';
 * import { AddCategory } from './components/AddCategory';
 * import { GifGrid } from './components/GifGrid';
 *
 * Pero ahora con este archivo de "barril", solo
 * habria que escribir la importacion de esta manera:
 *
 * import { GifItem, AddCategory, GifGrid } from './components';
 *
 */
export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';
