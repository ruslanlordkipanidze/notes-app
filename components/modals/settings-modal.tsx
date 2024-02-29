'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader
} from '@/components/ui/dialog';

import { useSettings } from '@/hooks/use-settings';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/mode-toggle';

export const SettingsModal = () => {
    const settings = useSettings();

    return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
        <DialogContent>
            <DialogHeader className='border-b pb-3'>
                <Label className='text-lg font-medium'>
                    Налаштування
                </Label>
            </DialogHeader>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-y-1'>
                    <Label>
                        Основна тема
                    </Label>
                <span className='text-[0.8rem] text-muted-foreground'>
                        Кастомізуйте зовнішній вигляд додатку
                    </span>
                </div>
                <ModeToggle />
            </div>
        </DialogContent>
    </Dialog>
    )
}