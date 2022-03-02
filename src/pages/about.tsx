import Link from 'next/link'
import { TextLink } from 'src/components/buttons/TextLink'
import { config } from 'src/config/config'
import { FloatingBox } from 'src/layout/FloatingBox'
import { HrDivider } from 'src/layout/HrDivider'

export default function AboutPage() {
  const pClass = 'mt-4 text-sm leading-loose'
  return (
    <div className="flex justify-center items-center flex-grow">
      <FloatingBox maxWidth="max-w-xl" classes="mb-12 mx-10 p-6">
        <h2 className="text-lg text-center font-medium">About Mento</h2>
        <p className={pClass}>
          Celo has stable value assets like the Celo Dollar (cUSD). Mento keeps the value of those
          tokens stable. It also provides an exchange so anyone can trade between the native assets.
          For more details about how Mento works, see{' '}
          <TextLink
            href="https://docs.celo.org/celo-codebase/protocol/stability"
            className="text-green"
          >
            the documentation
          </TextLink>
          .
        </p>
        <HrDivider classes="mt-4" />
        <p className={pClass}>
          Granda Mento is a process for large exchanges. Each exchange requires rough consensus from
          the Celo community. The funds must be locked for a week, during which the community can
          intervene. For details see{' '}
          <TextLink
            href="https://docs.celo.org/celo-codebase/protocol/stability/granda-mento"
            className="text-green"
          >
            the Granda documentation
          </TextLink>
          .
        </p>
        <HrDivider classes="mt-4" />
        <p className={pClass}>
          How to start swapping:
          <ol className="list-inside list-decimal">
            <li>
              Tap <q>Connect</q> and select your wallet
            </li>
            <li>
              Go to the{' '}
              <Link href="/">
                <a className="text-green">Swap</a>
              </Link>{' '}
              tab (or{' '}
              <Link href="/granda">
                <a className="text-green">Granda</a>
              </Link>{' '}
              tab for large exchanges)
            </li>
            <li>Select the assets you wish to swap</li>
            <li>
              Tap <q>Continue</q> and follow the instructions
            </li>
          </ol>
        </p>
        <HrDivider classes="mt-4" />
        <p className={pClass}>
          This DApp is a free tool to help the Celo community use Mento. It was funded by the Celo
          Foundation and created by{' '}
          <TextLink href="https://twitter.com/RossyWrote" className="text-green">
            J M Rossy
          </TextLink>
          . For help, join the chat on{' '}
          <TextLink href={config.discordUrl} className="text-green">
            Discord
          </TextLink>
          .
        </p>
        <p className="mt-4 text-xs text-center">{`Version: ${config.version || 'Unknown'}`}</p>
      </FloatingBox>
    </div>
  )
}
