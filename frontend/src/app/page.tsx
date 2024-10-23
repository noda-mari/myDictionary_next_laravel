import BoxButton from '@/components/BoxButton/BoxButton';
import { css } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns'

import { TbBookFilled } from "react-icons/tb"
import { LuPencilLine } from "react-icons/lu"
import { FaFolderOpen } from "react-icons/fa";

export default function Home() {
  return (
    <div className={flex({
      mt:"150px",
      justify: "space-around",
    })}>
      <BoxButton icon={TbBookFilled}
      >辞書を引く
      </BoxButton>
      <BoxButton icon={LuPencilLine}>
        単語を登録
      </BoxButton>
      <BoxButton icon={FaFolderOpen}>
        カテゴリーを作成
      </BoxButton>
    </div>
  )
}