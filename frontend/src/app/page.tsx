import BoxButton from '@/components/BoxButton/BoxButton';
import { flex } from '../../styled-system/patterns'

import { TbBookFilled } from "react-icons/tb"
import { LuPencilLine } from "react-icons/lu"
import { FaFolderOpen } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={flex({
      mt: "150px",
      justify: "space-around",
    })}>
      <BoxButton icon={TbBookFilled}
      >辞書を引く
      </BoxButton>
      <Link href="/word/add-word">
        <BoxButton icon={LuPencilLine}>
          単語を登録
        </BoxButton>
      </Link>
      <Link href="/category/add-category">
        <BoxButton icon={FaFolderOpen}>
          カテゴリーを作成
        </BoxButton>
      </Link>

    </div>
  )
}