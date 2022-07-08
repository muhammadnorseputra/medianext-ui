import { TsContentType } from '@/utils/Interface'
export default function Content ({ children }: TsContentType) {
	return (
		<div className="w-full mx-auto">
            { children }
        </div>
	)
}
