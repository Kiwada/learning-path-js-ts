export default function tratarErros(erro){
    if (erro.code === `ENOENT`) {
       throw new Error('Arquivo nao encontrado');
    }else{
        return 'Erro na aplicação';
    }
}
