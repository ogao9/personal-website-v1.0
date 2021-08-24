import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotificationStrip({slotInfo, icon}) {
    return (
        <div className="bg-white-light text-black-text rounded-lg px-2 py-2 mb-4 relative big-glass">
            {slotInfo.link && (
                <Link href={slotInfo.link}>
                    <a className="absolute inset-0 w-full h-full"></a>
                </Link>
            )}

            <div className="w-full flex justify-between items-center leading-tight">
                <div className="flex-1 ml-1">
                    <p className="text-sm text-gray-700 mb-1">
                        <FontAwesomeIcon
                            icon={icon}
                            className="w-3 inline mr-2"
                        />
                        {slotInfo.category}
                    </p>
                    <p className="font-semibold">{slotInfo.title}</p>
                    <p className="leading-tight">{slotInfo.content}</p>
                </div>

                <div className="flex-20 aspect-square">
                    <img
                        src={slotInfo.imageUrl}
                        alt={slotInfo.imageUrl ? "Cover Image" : ""}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

