import { TsContentType } from '@/utils/Interface'
export default function Content ({ children }: TsContentType) {
	return (
		<div className="mx-auto">
            { children }
        </div>
	)
}
