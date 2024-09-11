import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Link href="/login">
                <a>Đăng nhập</a>
            </Link>
            <Link href="/signup">
                <a>Đăng ký</a>
            </Link>
        </div>
    );
}
