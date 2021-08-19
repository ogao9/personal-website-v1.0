import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotificationStrip({slotInfo}) {
    return (
        <div className="bg-white-light text-black-text rounded-lg px-2 py-2 mb-4 big-glass relative">
            {slotInfo.link && (
                <Link href={slotInfo.link}>
                    <a className="absolute inset-0 w-full h-full"></a>
                </Link>
            )}

            <div className="w-full flex justify-between items-center leading-tight">
                <div className="flex-1 ml-1">
                    <p className="text-sm text-gray-700 mb-1">
                        <FontAwesomeIcon
                            icon={slotInfo.icon}
                            className="w-3 inline mr-2"
                        />
                        {slotInfo.category}
                    </p>
                    <p className="font-semibold">{slotInfo.title}</p>
                    <p className="leading-tight">{slotInfo.data}</p>
                </div>
                <div className="flex-20">
                    <img
                        src={slotInfo.imageUrl}
                        alt="Blog Cover Image"
                        className="w-full h-full object-fill"
                    />
                </div>
            </div>
        </div>
    );
}

