import React from 'react';
import * as S from './styles';

function Input({ ref, ...rest }: any) {
    return (
        <S.Container>
            <S.Label>
                {rest.label}
            </S.Label>
            <S.Field ref={ref} {...rest} />
        </S.Container>
    )
}

export default Input;