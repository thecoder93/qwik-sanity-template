export const GET_HEROBLOCK = `
*[_type == 'page' && slug.current == 'main-page'] {
   sections[] {
    _type,
    _type == "heroBlock" => {
      ...
    }
   }
}
`;
