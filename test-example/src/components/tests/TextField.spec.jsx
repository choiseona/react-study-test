import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 CSS 클래스가 적용된다.', async () => {
  await render(<TextField className="my-class" />);
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});
