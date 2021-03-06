import { TsContentType } from '@/utils/Interface'

export default function Content ({ children }: TsContentType) {
	return (
		<div className="flex-1">
            { children }
        </div>
	)
}
